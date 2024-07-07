import React, { useRef, useEffect } from 'react';

const GlitchTextEffect = ({ 
  text = "This is a glitch effect",
  glitchWord = "glitch",
  width = 600, 
  height = 200, 
  fontSize = 32,
  fontFamily = 'Arial',
  baseColor = 'white',
  glitchColors = ['#ff0000', '#00ff00', '#0000ff'],
  glitchIntensity = 10,
  sliceCount = 20
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawText = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.fillStyle = baseColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const words = text.split(' ');
      let currentX = width / 2 - ctx.measureText(text).width / 2;
      const centerY = height / 2;

      words.forEach((word, index) => {
        const wordWidth = ctx.measureText(word + ' ').width;
        if (word === glitchWord) {
          drawGlitchedWord(word, currentX + wordWidth / 2, centerY);
        } else {
          ctx.fillText(word, currentX + wordWidth / 2, centerY);
        }
        currentX += wordWidth;
      });
    };

    const drawGlitchedWord = (word, x, y) => {
      const wordWidth = ctx.measureText(word).width;
      const wordHeight = fontSize;

      // Create a temporary canvas for the glitched word
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = wordWidth;
      tempCanvas.height = wordHeight * 2;
      const tempCtx = tempCanvas.getContext('2d');

      // Draw the word on the temporary canvas
      tempCtx.font = ctx.font;
      tempCtx.fillStyle = baseColor;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(word, wordWidth / 2, wordHeight);

      // Apply glitch effect
      for (let i = 0; i < glitchIntensity; i++) {
        // Color channel offset
        let imageData = tempCtx.getImageData(0, 0, wordWidth, wordHeight * 2);
        let pixels = imageData.data;
        for (let j = 0; j < pixels.length; j += 4) {
          if (Math.random() < 0.1) {
            pixels[j] = pixels[j + 1] = pixels[j + 2] = 255; // White noise
          }
          pixels[j + Math.floor(Math.random() * 3)] = pixels[j + Math.floor(Math.random() * 3)]; // Color shifting
        }
        tempCtx.putImageData(imageData, 0, 0);

        // Random slices
        for (let j = 0; j < sliceCount; j++) {
          tempCtx.save();
          tempCtx.beginPath();
          tempCtx.rect(
            Math.random() * wordWidth, 
            Math.random() * wordHeight * 2, 
            Math.random() * wordWidth / 5, 
            Math.random() * wordHeight / 2
          );
          tempCtx.clip();
          tempCtx.drawImage(
            tempCanvas, 
            0, 0, wordWidth, wordHeight * 2, 
            Math.random() * 6 - 3, Math.random() * 6 - 3, wordWidth, wordHeight * 2
          );
          tempCtx.restore();
        }

        // Color layers
        glitchColors.forEach(color => {
          tempCtx.save();
          tempCtx.fillStyle = color;
          tempCtx.globalAlpha = 0.1;
          tempCtx.globalCompositeOperation = 'color-dodge';
          tempCtx.fillText(word, wordWidth / 2 + Math.random() * 4 - 2, wordHeight + Math.random() * 4 - 2);
          tempCtx.restore();
        });
      }

      // Draw the glitched word on the main canvas
      ctx.drawImage(tempCanvas, x - wordWidth / 2, y - wordHeight);
    };

    const animate = () => {
      drawText();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Clean up animation if needed
    };
  }, [text, glitchWord, width, height, fontSize, fontFamily, baseColor, glitchColors, glitchIntensity, sliceCount]);

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      style={{ border: '1px solid black', background: 'black' }}
    />
  );
};

export default GlitchTextEffect;
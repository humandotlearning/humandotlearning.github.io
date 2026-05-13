import React, {useEffect, useRef, useState} from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import portrait from '@site/static/img/profile_pixelart-removebg-preview.png';

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';

const socialLinks = [
  {
    Icon: Mail,
    href: 'mailto:nithin.varghese1357@gmail.com',
    label: 'Email Nithin',
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/nithin1357/',
    label: 'LinkedIn Profile',
  },
  {
    Icon: Github,
    href: 'https://github.com/humandotlearning',
    label: 'GitHub Profile',
  },
  {
    Icon: Twitter,
    href: 'https://twitter.com/call_me_Nithin',
    label: 'Twitter Profile',
  },
];

const proofPoints = [
  {
    label: '10,000+ cameras',
    value: 'Exam proctoring analytics at national-exam scale',
  },
  {
    label: 'Industrial safety CV',
    value: 'Mining, energy, banking, and retail video analytics',
  },
  {
    label: 'Edge inference',
    value: 'TFLite, TensorRT, and OpenVINO optimization',
  },
  {
    label: 'Multi-agent products',
    value: 'LangGraph storybook generation with print-ready PDFs',
  },
  {
    label: 'Voice-first agents',
    value: 'Socratic ideation workflows for structured writing outputs',
  },
];

function SocialIcon({Icon, href, label}) {
  return (
    <a
      className={styles.social}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={label}>
      <Icon size={20} strokeWidth={1.8} />
    </a>
  );
}

function SignalPortrait() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);
  const [canvasFailed, setCanvasFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;

    async function renderPortrait() {
      try {
        const vsSource = `
          precision mediump float;

          attribute vec2 aPosition;
          attribute vec2 aUV;

          varying vec2 vUV;

          void main() {
            gl_Position = vec4(aPosition, 0.0, 1.0);
            vUV = aUV;
          }
        `;

        const fsSource = `
          precision mediump float;

          uniform sampler2D uTexture1;

          varying vec2 vUV;

          void main() {
            vec4 color1 = texture2D(uTexture1, vUV);
            float dist = distance(vUV, vec2(0.5, 0.5));
            float vignette = smoothstep(0.62, 0.28, dist);

            color1.rgb = mix(color1.rgb, color1.rgb * vec3(0.9, 1.03, 0.96), 0.32);
            color1.rgb *= 0.88 + vignette * 0.16;
            color1.a *= 1.0 - smoothstep(0.46, 0.56, dist);

            gl_FragColor = color1;
          }
        `;

        const profileImage = await loadImage(portrait);

        if (cancelled || !canvas) {
          return;
        }

        const renderer = new WebGLPortrait(canvas);
        rendererRef.current = renderer;
        const {gl} = renderer;

        renderer
          .init(vsSource, fsSource)
          .loadBuffer(
            new Float32Array([
              1.0, 1.0, 1, 1, -1.0, 1.0, 0, 1, -1.0, -1.0, 0, 0,
              -1.0, -1.0, 0, 0, 1.0, -1.0, 1, 0, 1.0, 1.0, 1, 1,
            ]),
          )
          .setAttrib('aPosition', 2, gl.FLOAT, false, 16, 0)
          .setAttrib('aUV', 2, gl.FLOAT, false, 16, 8)
          .loadTexture(profileImage)
          .setUniform('uTexture1', 'uniform1i', 0);

        setCanvasReady(true);
        renderer.draw(renderer.gl.TRIANGLES, 6);
      } catch (error) {
        if (!cancelled) {
          setCanvasFailed(true);
        }
      }
    }

    renderPortrait();

    return () => {
      cancelled = true;
      rendererRef.current?.destroy();
    };
  }, []);

  return (
    <div
      className={clsx(styles.portraitFrame, {
        [styles.portraitReady]: canvasReady,
        [styles.portraitFallbackOnly]: canvasFailed,
      })}>
      <div className={styles.portraitGrid} aria-hidden="true" />
      <img
        src={portrait}
        className={styles.portraitImage}
        alt="Pixel portrait of Nithin Varghese"
      />
      <canvas
        ref={canvasRef}
        width="420"
        height="420"
        className={styles.portraitCanvas}
        aria-hidden="true"
      />
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroAtmosphere} aria-hidden="true" />
      <div className={styles.heroShell}>
        <section className={styles.heroCopy} aria-labelledby="homepage-title">
          <p
            className={clsx(styles.eyebrow, styles.reveal)}
            style={{'--delay': '80ms'}}>
            Applied AI Systems Engineer
          </p>
          <Heading
            as="h1"
            id="homepage-title"
            className={clsx(styles.heroTitle, styles.reveal)}
            style={{'--delay': '160ms'}}>
            {siteConfig.title}
          </Heading>
          <p
            className={clsx(styles.heroClaim, styles.reveal)}
            style={{'--delay': '220ms'}}>
            I turn AI prototypes into deployed systems.
          </p>
          <p
            className={clsx(styles.heroLead, styles.reveal)}
            style={{'--delay': '280ms'}}>
            Built multi-agent LLM products, real-time CCTV analytics, edge CV
            pipelines, and 10,000+ camera-scale monitoring workflows. Former
            Head CV Engineer now building agentic AI products with LangGraph,
            RAG, voice workflows, and multimodal pipelines.
          </p>
          <div
            className={clsx(styles.heroActions, styles.reveal)}
            style={{'--delay': '360ms'}}>
            <Link className="button button--secondarycss button--lg" to="/projects">
              View Projects
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
            <a
              className={clsx(
                'button button--secondarycss button--lg',
                styles.ghostAction,
              )}
              href="mailto:nithin.varghese1357@gmail.com">
              Contact
              <Mail size={18} strokeWidth={1.8} />
            </a>
          </div>
          <div
            className={clsx(styles.socialIcons, styles.reveal)}
            style={{'--delay': '440ms'}}>
            {socialLinks.map(({Icon, href, label}) => (
              <SocialIcon key={label} Icon={Icon} href={href} label={label} />
            ))}
          </div>
        </section>

        <aside
          className={clsx(styles.portraitPanel, styles.reveal)}
          style={{'--delay': '260ms'}}
          aria-label="Applied AI portrait treatment">
          <SignalPortrait />
          <p className={styles.portraitCaption}>
            Production AI / Agents / LLMs / Computer Vision
          </p>
        </aside>
      </div>

      <dl className={clsx(styles.proofGrid, styles.reveal)} style={{'--delay': '560ms'}}>
        {proofPoints.map((item) => (
          <div key={item.label} className={styles.proofItem}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Production AI Systems Engineer"
      description="Nithin Varghese turns AI prototypes into deployed systems across LLM agents, multi-agent workflows, and production computer vision.">
      <div className={styles.homeSurface}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}

class WebGLPortrait {
  gl;
  program;
  vs;
  fs;
  buffer;
  textures = [];

  constructor(el) {
    if (!(el instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element is required');
    }

    this.gl = el.getContext('webgl', {
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
    });

    if (!this.gl) {
      throw new Error('WebGL is unavailable');
    }

    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
  }

  init(vsSource, fsSource) {
    this.vs = this.createShader(this.gl.VERTEX_SHADER, vsSource);
    this.fs = this.createShader(this.gl.FRAGMENT_SHADER, fsSource);

    this.program = this.gl.createProgram();
    this.gl.attachShader(this.program, this.vs);
    this.gl.attachShader(this.program, this.fs);
    this.gl.linkProgram(this.program);

    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      throw new Error(this.gl.getProgramInfoLog(this.program));
    }

    this.gl.useProgram(this.program);

    return this;
  }

  createShader(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      throw new Error(this.gl.getShaderInfoLog(shader));
    }

    return shader;
  }

  loadBuffer(typedArray) {
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, typedArray, this.gl.STATIC_DRAW);

    return this;
  }

  loadTexture(image) {
    const texture = this.gl.createTexture();
    const textureIndex = this.textures.length;

    this.gl.activeTexture(this.gl[`TEXTURE${textureIndex}`]);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      image,
    );

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE,
    );

    this.textures.push(texture);
    return this;
  }

  setAttrib(name, size, type, normalized, stride, offset) {
    const location = this.gl.getAttribLocation(this.program, name);
    this.gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
    this.gl.enableVertexAttribArray(location);

    return this;
  }

  setUniform(name, type, value) {
    const location = this.gl.getUniformLocation(this.program, name);
    this.gl[type](location, value);

    return this;
  }

  draw(type, count) {
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(type, 0, count);
  }

  destroy() {
    this.textures.forEach((texture) => this.gl.deleteTexture(texture));

    if (this.buffer) {
      this.gl.deleteBuffer(this.buffer);
    }

    if (this.program) {
      this.gl.deleteProgram(this.program);
    }

    if (this.vs) {
      this.gl.deleteShader(this.vs);
    }

    if (this.fs) {
      this.gl.deleteShader(this.fs);
    }
  }
}

function loadImage(path) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = path;
  });
}

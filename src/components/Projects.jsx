import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

function ProjectTech({ tech }) {
  if (!tech?.length) return null
  return (
    <ul className="project-tech" aria-label="技术栈">
      {tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectShot({ project, float, onPreview }) {
  if (!project.image) return null
  const alt = project.imageAlt || `${project.name} 截图`
  const classes = [
    'project-shot',
    project.imageWide ? 'is-wide' : '',
    float ? 'is-float' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes}>
      <button
        type="button"
        className="project-shot-btn"
        onClick={() =>
          onPreview({
            src: project.image,
            alt,
            title: project.name,
            wide: Boolean(project.imageWide),
          })
        }
        aria-label={`预览 ${project.name} 截图`}
      >
        <img src={project.image} alt={alt} loading="lazy" />
      </button>
    </figure>
  )
}

function ProjectHighlights({ highlights }) {
  if (!highlights?.length) return null
  return (
    <ul className="project-highlights">
      {highlights.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  )
}

function ImageLightbox({ preview, closing, onClose, onAnimEnd, titleId }) {
  if (!preview) return null

  return createPortal(
    <div
      className={`image-lightbox${closing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return
        onAnimEnd?.()
      }}
    >
      <button
        type="button"
        className="image-lightbox-close"
        onClick={onClose}
        aria-label="关闭预览"
      >
        ×
      </button>
      <div
        className={`image-lightbox-panel${preview.wide ? ' is-wide' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p id={titleId} className="image-lightbox-title">
          {preview.title}
        </p>
        <img src={preview.src} alt={preview.alt} />
      </div>
    </div>,
    document.body,
  )
}

export default function Projects({ items }) {
  const titleId = useId()
  const [preview, setPreview] = useState(null)
  const [closing, setClosing] = useState(false)

  const openPreview = (next) => {
    setClosing(false)
    setPreview(next)
  }

  const requestClose = () => {
    if (!preview || closing) return
    setClosing(true)
  }

  const finishClose = () => {
    if (!closing) return
    setPreview(null)
    setClosing(false)
  }

  useEffect(() => {
    if (!preview) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') setClosing(true)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [preview])

  return (
    <section id="projects" className="section">
      <h2 className="section-title">项目经历</h2>
      <div className="project-list">
        {items.map((project) => {
          const align = project.imageAlign
          const hasDefaultShot = project.image && !align

          return (
            <article key={`${project.org}-${project.name}`} className="card project-item">
              <header className="project-head">
                <div>
                  <h3>{project.name}</h3>
                  <p className="project-meta">
                    {project.org}
                    <span className="edu-sep">·</span>
                    {project.role}
                  </p>
                </div>
                <time>{project.period}</time>
              </header>

              {align === 'highlights' ? (
                <>
                  <ProjectTech tech={project.tech} />
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-highlights-wrap">
                    <ProjectShot project={project} float onPreview={openPreview} />
                    <ProjectHighlights highlights={project.highlights} />
                  </div>
                </>
              ) : align === 'summary' ? (
                <>
                  <ProjectTech tech={project.tech} />
                  <div
                    className={`project-summary-row${
                      project.imageWide ? ' shot-wide' : ''
                    }`}
                  >
                    <p className="project-summary">{project.summary}</p>
                    <ProjectShot project={project} onPreview={openPreview} />
                  </div>
                  <ProjectHighlights highlights={project.highlights} />
                </>
              ) : (
                <div
                  className={`project-main${hasDefaultShot ? ' has-shot' : ''}${
                    project.imageWide ? ' shot-wide' : ''
                  }`}
                >
                  <div className="project-body">
                    <ProjectTech tech={project.tech} />
                    <p className="project-summary">{project.summary}</p>
                    <ProjectHighlights highlights={project.highlights} />
                  </div>
                  <ProjectShot project={project} onPreview={openPreview} />
                </div>
              )}
            </article>
          )
        })}
      </div>

      <ImageLightbox
        preview={preview}
        closing={closing}
        onClose={requestClose}
        onAnimEnd={finishClose}
        titleId={titleId}
      />
    </section>
  )
}

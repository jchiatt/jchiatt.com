export function ExternalLink({ href, alt, children }) {
  return (
    <a
      target="_blank"
      alt={alt}
      className="text-teal-600 dark:text-teal-400"
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">This page is not on the site.</h1>
      <p className="mt-4 text-muted">The project or path does not exist here.</p>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm text-bg">
        Back home
      </Link>
    </div>
  );
}

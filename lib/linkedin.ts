// Normalizes any LinkedIn post reference into an embeddable iframe src.
//
// Accepts, in order of preference:
//   • a full "Embed this post" URL  (…/embed/feed/update/urn:li:…)
//   • a URN, encoded or plain        (urn:li:activity:123…  /  urn%3Ali%3Aactivity%3A123…)
//   • a normal post URL slug         (…_slug-activity-123…-abcd/)
//   • a bare numeric id              (7482587400611876864 → treated as an activity)
//
// Returns '' when nothing usable is found, so callers can skip it.
export function toLinkedInEmbedSrc(input: string): string {
  const raw = (input || '').trim();
  if (!raw) return '';

  const build = (type: string, id: string) =>
    `https://www.linkedin.com/embed/feed/update/urn:li:${type}:${id}`;

  // Already an embed URL — reuse the URN portion, dropping any query string.
  const embed = raw.match(/\/embed\/feed\/update\/(urn:li:[a-zA-Z]+:\d+)/);
  if (embed) return `https://www.linkedin.com/embed/feed/update/${embed[1]}`;

  const decoded = (() => {
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  })();

  // Explicit URN (activity / share / ugcPost).
  const urn = decoded.match(/urn:li:(activity|share|ugcPost):(\d+)/i);
  if (urn) return build(urn[1], urn[2]);

  // Slug form: "…-activity-<id>-<hash>".
  const slug = decoded.match(/(activity|share|ugcPost)-(\d+)/i);
  if (slug) return build(slug[1], slug[2]);

  // Bare id.
  const id = decoded.match(/\b(\d{15,25})\b/);
  if (id) return build('activity', id[1]);

  return '';
}

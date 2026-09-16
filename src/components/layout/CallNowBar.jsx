import { Phone } from "lucide-react";
import { siteContact } from "../../lib/siteContact";

export default function CallNowBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] border-t border-emerald-500/50 bg-[#030712]/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Call now"
    >
      <a
        href={siteContact.phoneHref}
        title={siteContact.phoneTitle}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 text-lg font-black uppercase tracking-wide text-white shadow-[0_4px_28px_rgba(16,185,129,0.5)] ring-2 ring-emerald-300/40 transition active:scale-[0.98] hover:bg-emerald-400 sm:text-xl"
      >
        <Phone className="size-6 shrink-0" aria-hidden />
        <span>Call Now</span>
        <span className="hidden font-bold normal-case tracking-normal sm:inline">
          · {siteContact.phoneDisplay}
        </span>
      </a>
    </div>
  );
}

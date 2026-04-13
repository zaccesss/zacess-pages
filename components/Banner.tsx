export default function Banner() {
  return (
    <div className="w-full text-center px-5 py-7 font-mono border border-[rgba(255,255,0,0.4)] bg-[rgba(255,255,0,0.02)] flex-shrink-0">
      <p className="text-[#ffff00] text-sm font-bold tracking-widest">
        [ SITE UNDER CONSTRUCTION ]
      </p>
      <p className="text-[#555555] text-[0.85rem] mt-0.5">
        being rebuilt -- use the terminal below to explore
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/underconstruction.jpg"
        alt="under construction"
        loading="lazy"
        className="h-36 w-auto mx-auto my-4 border border-[rgba(255,255,0,0.3)]"
      />

      <p className="text-[#555555] text-[0.85rem]">
        contact:{' '}
        <a
          href="mailto:contact@zacess.com"
          className="text-[#00f5ff] no-underline border-b border-[rgba(0,245,255,0.35)] hover:border-[#00f5ff] transition-colors duration-150"
        >
          contact@zacess.com
        </a>
      </p>
      <p className="text-[#555555] text-[0.85rem] mt-0.5">
        check out my main site:{' '}
        <a
          href="https://isaacadjei.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#06ffa5] no-underline border-b border-[rgba(6,255,165,0.35)] hover:border-[#06ffa5] transition-colors duration-150"
        >
          isaacadjei.me
        </a>
      </p>
    </div>
  )
}

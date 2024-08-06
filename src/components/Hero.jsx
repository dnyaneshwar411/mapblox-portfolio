export default function Hero() {
  return <div className="bg-gradient-to-b from-[var(--color-1)] to-[var(--color-2)] h-[70vh] lg:h-[90vh] text-center padding-inline flex flex-col items-center justify-center">
    <h1 className="max-w-[28ch] mx-auto leading-[1.4] animate-translateYAndFade">I am a 🧑‍🦰<br /> fullstack developer who love building <span className="bg-[var(--color-5)] text-[var(--color-1)] lg:pt-1 pb-2 lg:pb-4 px-4 lg:px-10 rounded-full">products</span></h1>
    <p className="italic mt-4 text-[20px] lg:text-[28px] text-[#808080] font-semibold animate-translateYAndFade">🙂✌️ I love talking about tech and building stuff</p>
    <div className="flex items-center gap-8 animate-translateYAndFade">
      <a className="px-4 py-2 rounded-md bg-black text-[var(--color-1)] text-[20px] mt-10" href="#projects">Projects 🚀</a>
      <a className="px-4 py-2 rounded-md bg-transparent border-2 border-black text-black text-[20px] mt-10" href="https://drive.google.com/file/d/1V8fkHhZCVv4nj4JhNpayIk1W5NCCFEnS/view?usp=sharing">Resume 🚀</a>
    </div>
  </div>
}
import Mail from "/mail.svg"

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4 p-10 text-center">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Pulliam-Bivens Tutoring
        </h1>
        <p className="text-slate-600">One on one tutoring with a perfect scoring PSAT and ACT scorer. Contact us for rates and availability.</p>
        <a href="mailto:jbpulliam06@icloud.com" className="flex flex-row gap-2 items-center cursor-pointer text-blue-600">
          <img src={Mail} alt="Email: " className="h-4" /> <span>jbpulliam06@icloud.com</span>
        </a>
      </div>

      <div className="p-4 bg-gray-50 rounded-md max-w-96 text-left flex flex-col gap-2">
        <p className="text-sm">
          &quot;Jonah Pulliam and Sawyer Bivens have been some of my most dedicated and hard-working students. I am sure that they can help improve your ACT scores.&quot;
        </p>
        <p className="text-sm flex flex-row gap-2 items-center">
          <span className="font-semibold">Mr. Maddox</span>
          <span className="text-gray-600 text-xs">AP Calculus Teacher</span>
        </p>
      </div>
    </div>
  )
}

export default App

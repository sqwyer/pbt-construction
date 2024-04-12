import Mail from "/mail.svg"

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-2 p-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Pulliam-Bivens Tutoring
      </h1>
      <p className="text-slate-600">One on one tutoring with a perfect scoring PSAT and ACT scorer. Contact us for rates and availability.</p>
      <a href="mailto:jbpulliam06@icloud.com" className="flex flex-row gap-2 items-center cursor-pointer text-blue-600">
        <img src={Mail} alt="Email: " className="h-4" /> <span>jbpulliam06@icloud.com</span>
      </a>
    </div>
  )
}

export default App

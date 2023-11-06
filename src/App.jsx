import ScreenShot from "./assets/screenshots/Untitled-1.png";
import InstagramTextLogo from "./assets/instagram-logo/Instagram_logo..png";
import GooglePlay from "./assets/stores-logo/GooglePlay.png";
import Microsoft from "./assets/stores-logo/Microsoft.png";

function App() {
  const footer_text = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="h-fit w-screen flex flex-row justify-center items-center mt-5">
          <div className="h-full w-full md:flex flex-row justify-end items-center hidden">
            <img className="scale-75" src={ScreenShot} />
          </div>
          <div className="h-full w-full flex flex-row justify-center mb-10 md:mb-0 md:justify-start items-center">
            <div className="flex flex-col gap-2">
              <div className="w-[350px] h-[324px] border-[1px] border-[219, 219, 219] rounded-sm flex flex-col items-center justify-center">
                <img className="scale-[0.65]" src={InstagramTextLogo} />
                <input
                  className="border-[1px] border-[219, 219, 219] outline-none rounded-[3px] w-4/5 py-[6px] px-2 placeholder:text-[12px] placeholder:text[75, 75, 75]"
                  placeholder="Phone number, username, or email"
                />
                <input
                  className="border-[1px] border-[219, 219, 219] outline-none rounded-[3px] w-4/5 py-[6px] px-2 placeholder:text-[12px] placeholder:text[75, 75, 75] mt-1"
                  placeholder="Password"
                />
                <button className="w-4/5 rounded-lg text-slate-50 bg-[#0095F6] font-bold text-center py-[6px] mt-3">
                  Log in
                </button>
                <span className="mt-4 text-sm cursor-pointer text-[#003783]">
                  Forgot Password?
                </span>
              </div>
              <div className="w-[350px] h-[63px] border-[1px] border-[219, 219, 219] rounded-sm flex flex-row justify-center items-center gap-2 text-[14px]">
                <span>{`Don't have an account?`}</span>
                <span className="text-[#0095F6] font-bold cursor-pointer">
                  Sign up
                </span>
              </div>
              <div className="w-[350px] flex flex-row justify-center items-center">
                Get the app.
              </div>
              <div className="w-[350px] flex flex-row justify-center items-center gap-1">
                <img className="w-[120px] cursor-pointer" src={GooglePlay} />
                <img className="w-[120px] cursor-pointer" src={Microsoft} />
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER  */}
        <div className="flex flex-col gap-3 h-fit mb-4 items-center justify-center">
          <div className="flex flex-row w-3/5 md:w-full flex-wrap justify-center items-center gap-3">
            {footer_text.map((element) => {
              return (
                <span
                  key={element}
                  className="text-sm text-[#737373] cursor-pointer"
                >
                  {element}
                </span>
              );
            })}
          </div>
          <div className="flex flex-row w-full justify-center items-center gap-3 mb-5">
            <span className="text-sm text-[#737373] cursor-pointer">
              English
            </span>
            <span className="text-sm text-[#737373] cursor-pointer">
              © 2023 Atid & Ali D from IUT
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

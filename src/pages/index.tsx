import { Layout } from "@/components";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState("");
  const [nowprice, setNowprice] = useState<number | null>(null);
  const [result, setResult] = useState<string | number | null>(null);

  const openHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const dollerChangeHandler = () => {
    setNowprice(82700);
    setToggle(true);
  };

  const IIRChangerHandler = () => {
    setNowprice(1 / 82700);
    setToggle(true);
  };

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resultHandler = () => {
    if (nowprice !== null && value !== "") {
      const numericInput = Number(value);
      if (!isNaN(numericInput)) {
        const calculated = numericInput * nowprice;
        if (nowprice < 1) {
          const str = calculated.toFixed(12);
          setResult(str);
        } else {
          setResult(calculated);
        }
      } else {
        setResult(null);
      }
    }
  };

  return (
    <Layout>
      <div className="container border-2 mx-auto flex justify-center items-center">
        <div className="w-[800px] h-[600px] bg-gray-400 rounded-md flex flex-col justify-start items-center p-5">
          <h3> محاسبه ارز تبدیلی ریال و دلار</h3>
          <div className="w-3/4 h-[4px] bg-blue-400 mt-5 mb-[60px]"></div>

          <div className="flex flex-col bg-gray-300 w-full mx-auto h-[150px] justify-between p-5 rounded-md">
            <div className="w-3/4 flex mx-auto justify-between items-center">
              <div className="relative inline-block text-left w-3/4">
                <button
                  onClick={openHandler}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  انتخاب ارز
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                    toggle ? "hidden" : "block"
                  }`}
                >
                  <button
                    onClick={dollerChangeHandler}
                    className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    دلار (USD)
                  </button>
                  <button
                    onClick={IIRChangerHandler}
                    className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    ریال (IRR)
                  </button>
                </div>
              </div>
              <p> : ارز مبدا</p>
            </div>

            <div className="w-3/4 flex mx-auto justify-between items-center">
              <input
                className="w-3/4 p-2 rounded-md text-center"
                type="number"
                onChange={valueHandler}
                value={value}
                placeholder="مقدار را وارد کنید"
              />
              <p> : مقدار</p>
            </div>
          </div>

          <div className="w-3/4 h-[30px] flex justify-center items-center mt-5">
            <button
              onClick={resultHandler}
              className="w-full p-1 bg-green-600 rounded-md text-white"
            >
              محاسبه
            </button>
          </div>

          <div className="justify-center items-center w-[200px] flex h-[100px] bg-gray-300 mt-5 rounded-md">
            <p className="mr-2">
              {result !== null ? result.toLocaleString() : "نتیجه"}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

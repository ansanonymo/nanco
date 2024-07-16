import { BiMap, BiKey, BiPowerOff } from "react-icons/bi";
import {FaUser} from "react-icons/fa"
function InputGroup3({
    label,
    name,
    value,
    onChange,
    type = "text",
    decoration,
    inputClassName = "",
    decorationClassName = "",
    disabled,
}) {
    return (
        <div className="flex items-stretch w-full">
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={label}
                aria-label={label}
                className={`peer block w-full py-3 px-3 text-gray-600 bg-white border border-gray-400 focus:border-red-400 focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300 ${disabled ? "bg-gray-200" : ""
                    } ${inputClassName}`}
                disabled={disabled}
            />
            <div
                className={`flex items-center rounded-tl-none rounded-bl-none rounded px-3 py-3 text-gray-600 border border-gray-400 border-l-0 ${disabled ? "bg-gray-200" : ""
                    } ${decorationClassName}`}
            >
                {decoration}
            </div>
        </div>
    );
}

function Form() {
    return (
        <div className="flex flex-col bg-white w-full p-5 sm:p-10 gap-8 rounded-md">
            <InputGroup3
                name="email"
                label="Email"
                type="email"
                decoration={
                    <>
                        <span className="hidden sm:block">@tailwindreact.com</span>
                        <span className="block sm:hidden">@</span>
                    </>
                }
            />
            <InputGroup3
                name="name"
                label="Name"
                decoration={<FaUser size="1rem" />}
            />
            <textarea name="" id="" placeholder="Your Massage is here" className=" h-24  w-full py-3 px-3 text-gray-600 bg-white border border-gray-400 focus:border-red-400 focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300">

            </textarea>
            <div>
                <button className="px-16 py-3 rounded-lg bg-primary text-white">
                    Submit
                </button>
            </div>
           
         
        </div>
    );
}

export {Form};

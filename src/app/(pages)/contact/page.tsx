import InputField from "@/app/component/input-field/input-field"
import ThemeButton from "@/app/component/theme-button/ThemeButton"

const ContactUs = () =>{
    return(
        <div className="max-w-[600px] sm:mx-auto sm:py-8 py-4 sm:px-8 px-4 sm:my-12 my-6 mx-4 border shadow-xl rounded-xl">
            <h2 className="font-seibold text-center sm:text-xl text-lg font-semibold">Please Enter Your Details</h2>
                <div className="grid gap-4 mt-6">
                  <InputField type={"text"} placeholder="Name" />
                  <InputField type={"number"} placeholder="Phone no." />
                  <InputField type={"email"} placeholder="Email address" />
                  <InputField type={"number"} placeholder="Amount" inputClassName={"w-fit"} />
                </div>
                <ThemeButton text="Submit" buttonClassName={"w-full mt-6"}  />
        </div>
    )
}
export default ContactUs
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string,
    name:string,
    message: string,
}

export default function ContactForm() {
    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend><h2>Contact Us</h2></legend>
            <div className="input-container">
                <input type="email" placeholder="example@mail.com" {...register("email")} className = "input-elem"/>
                <input type="text" placeholder="john Doe" {...register("name")} className = "input-elem"/>
                <textarea placeholder="Write a message here..." {...register("message")} className = "input-elem"/>
            </div>
            <div className="subnitAndClear-btn-container">
                <button className="btn" type="submit">Send</button>
                <button className="btn" type="button" onClick={() => reset()}>Clear</button>
            </div>
            
          </fieldset>    
        </form>
    )
}

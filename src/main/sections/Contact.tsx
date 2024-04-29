import emailjs from '@emailjs/browser';
import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { contactWords } from '../../constants/constants';

export default function Contact({ shouldShow }: { shouldShow: boolean }) {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { target } = e;

        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        'Thank you. I will get back to you as soon as possible.'
                    );

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert('Something went wrong! Please try again.');
                }
            );
    };
    return (
        shouldShow && (
            <div className='flex flex-col py-3 text-sm'>
                <p className=''>{contactWords}</p>
                <div className='my-4 flex'>
                    <img
                        src='/src/assets/writing.jpg'
                        className='h-1/2 w-1/2'
                    />
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='ml-8 flex w-full flex-col gap-3'
                    >
                        <label className='flex flex-col gap-1'>
                            <span>Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                className='border border-gray-300 bg-gray-50'
                                required
                            ></input>
                        </label>
                        <label className='flex flex-col gap-1'>
                            <span>Email Address</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                className='border border-gray-300 bg-gray-50'
                                required
                            ></input>
                        </label>
                        <label className='flex flex-col gap-1'>
                            <span>Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                className='border border-gray-300 bg-gray-50'
                                required
                                rows={7}
                            ></textarea>
                        </label>
                        <button
                            type='submit'
                            className='w-fit bg-gray-800 px-8 py-3 font-serif text-white'
                        >
                            {loading ? 'SENDING...' : 'SEND'}
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import FormButton from "./formButton";
import Loader from "./loader";

export default function Form({ toggleForm }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setMessage("Пожалуйста, заполните обязательные поля.");
      setIsSuccess(false);
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post("/api/submit-form", formData);
      if (response.status === 200) {
        setMessage("Заявка успешно отправлена!");
        setIsSuccess(true);
        setIsSubmitted(true);
      } else {
        setMessage("Ошибка при отправке. Попробуйте позже.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setMessage("Ошибка при отправке. Попробуйте позже.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#12121299] z-50">
      {isLoading && <Loader />}
      <div className="px-[30px] pt-[20px] md:px-[75px] md:pt-[53px] pb-[40px] rounded-[40px] bg-white">
        {isSubmitted ? (
          <div className="text-center flex flex-col items-center justify-center">
            <Image src="/success.svg" width={50} height={50} alt="Успешно"/>
            <p className="text-[25px] hd:text-[36px] font-[600] text-green-500 mt-[20px]">
              Заявка успешно отправлена!
            </p>
            <button className="mt-[20px] text-blue-500" onClick={toggleForm}>
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <h2 className="text-center text-[25px] md:text-[36px] font-[600]">
                Заполните форму <span className="text-[#597E72]">для заявки</span>
              </h2>
              <button className="absolute top-0 right-0" onClick={toggleForm}>
                <Image src={"/formX.svg"} width={36} height={36} alt="Закрыть форму" />
              </button>
            </div>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] gap-x-[50px] mb-[50px]">
              <div>
                <p className="text-[21px]">Введите ваше имя<span className="text-[#FF1100]">*</span></p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-[25px] text-[25px] border border-[#597E72] rounded-[13px] h-[65px] w-full"
                />
              </div>
              <div>
                <p className="text-[21px]">Введите фамилию</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-[25px] text-[25px] border border-[#597E72] rounded-[13px] h-[65px] w-full"
                />
              </div>
              <div>
                <p className="text-[21px]">Введите номер телефона<span className="text-[#FF1100]">*</span></p>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="p-[25px] text-[25px] border border-[#597E72] rounded-[13px] h-[65px] w-full"
                />
              </div>
              <div>
                <p className="text-[21px]">Введите ваш e-mail</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-[25px] text-[25px] border border-[#597E72] rounded-[13px] h-[65px] w-full"
                />
              </div>
            </article>
            <div className="justify-center flex">
              <FormButton type={"submit"} text={"Отправить заявку"} />
            </div>
            {message && (
              <p className={`text-[21px] mt-[25px] ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}
            <p className="text-[21px] mt-[25px]"><span className="text-[#FF1100]">*</span>Обязательные пункты для заполнения</p>
          </form>
        )}
      </div>
    </div>
  );
}

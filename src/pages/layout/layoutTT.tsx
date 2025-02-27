import { Form, Input } from "antd";
import { useState } from "react";
import OrderPopup from "./popup";

const LayoutTT = ( )=> {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPopup = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const fakeData = [
    {
      id: 1,
      image: "/img/img.jpg",
      deposit:
        '1.000 <span class="text-red-500 font-bold">KBN</span> + 200 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "98,000 VND",
    },
    {
      id: 2,
      image: "/img/img.jpg",
      deposit:
        '5..000 <span class="text-red-500 font-bold">KBN</span> + 500 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "196,000 VND",
    },
    {
      id: 3,
      image: "/img/img.jpg",
      deposit:
        '10.000 <span class="text-red-500 font-bold">KBN</span> + 1.000 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "490,000 VND",
    },
    {
      id: 4,
      image: "/img/img.jpg",
      deposit:
        '20.000 <span class="text-red-500 font-bold">KBN</span> + 4.000 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "98,000 VND",
    },
    {
      id: 5,
      image: "/img/img.jpg",
      deposit:
        '30.000 <span class="text-red-500 font-bold">KBN</span> + 6.000 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "196,000 VND",
    },
    {
      id: 6,
      image: "/img/img.jpg",
      deposit:
        '50.000 <span class="text-red-500 font-bold">KBN</span> + 10.000 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "490,000 VND",
    },
    {
      id: 7,
      image: "/img/img.jpg",
      deposit:
        '100.000 <span class="text-red-500 font-bold">KBN</span> + 20.000 <span class="text-red-500 font-bold">Bonus</span>',
      receive: "98,000 VND",
    },
  ];

  return (
    <div className="flex mx-w-full m-5">
      <div
        className="flex-2/3 ml-3 border-r-[20px] border-transparent"
        style={{
          borderImage: "url('/img/border.png') 30 stretch",
        }}
      >
        <div className="pr-5">
          <div>
            <Form layout="vertical" className="mx-auto">
              <Form.Item
                label={
                  <span className="font-roboto font-semibold text-[16px] leading-[19.36px]">
                    Nạp cho tài khoản
                  </span>
                }
              >
                <Input
                  type="text"
                  step="0.001"
                  min="0.001"
                  className="mx-w-[682px] h-[42px] border p-[10px] px-[14px] rounded-lg"
                  placeholder="Nhập tên tài khoản"
                />
              </Form.Item>
            </Form>
          </div>
          <div>
            <Form layout="vertical" className="mx-auto">
              <Form.Item
                label={
                  <span className="font-roboto font-semibold text-[16px] leading-[19.36px]">
                    Họ và tên
                  </span>
                }
              >
                <Input
                  type="text"
                  step="0.001"
                  min="0.001"
                  className="mx-mx-w-[682px] h-[42px] border p-[10px] px-[14px] rounded-lg"
                  placeholder="Họ và tên"
                />
              </Form.Item>
            </Form>
          </div>
          <div>
            <Form layout="vertical" className="mx-auto">
              <Form.Item
                label={
                  <span className="font-roboto font-semibold  text-[16px] leading-[19.36px]">
                    Chọn nạp game
                  </span>
                }
              >
                <Input
                  type="text"
                  step="0.001"
                  min="0.001"
                  className="mx-w-[682px] h-[42px] border p-[10px] px-[14px] rounded-lg"
                  placeholder="Swordsman Online"
                />
              </Form.Item>
            </Form>
          </div>
          <div>
            <Form layout="vertical" className="mx-auto">
              <Form.Item
                label={
                  <span className="font-roboto font-semibold  text-[16px] leading-[19.36px]">
                    Chọn máy chủ
                  </span>
                }
              >
                <Input
                  type="text"
                  step="0.001"
                  min="0.001"
                  className="mx-w-[682px] h-[42px] border p-[10px] px-[14px] rounded-lg"
                  placeholder="Server Test"
                />
              </Form.Item>
            </Form>
          </div>
          <div>
            <p className="font-roboto font-semibold  text-[16px] leading-[19.36px]">
              Chọn gói nạp
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 w-full">
              {fakeData.map((item) => (
                <div
                  key={item.id}
                  className="relative w-full max-w-[300px] h-[220px] mx-auto mb-3 overflow-hidden"
                  onClick={() => handleOpenPopup(item)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[16px] bg-opacity-50 text-[#000000] font-bold text-lg mt-12">
                    <div dangerouslySetInnerHTML={{ __html: item.deposit }} />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-between  bg-opacity-90 text-black font-bold text-sm p-4.5 rounded-b-lg">
                    <span className="text-lg font-semibold">
                      Gói {item.receive} VND
                    </span>

                    <button
                      className="w-6 h-6 flex items-center  justify-center border border-blue-500 rounded-lg text-white bg-transparen bg-blue-500 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-white">+</span>
                    </button>
                  </div>
                </div>
              ))}
              {selectedItem && (
                <OrderPopup
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  item={selectedItem} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1/3 mx-w-auto h-[650px] rounded-t-[16px] rounded-b-[16px] bg-[#FFFFFF] border border-gray-300 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)] ml-3 mr-3 hidden md:block">
        <div className="mx-auto h-[67px] p-[10px] space-x-[10px] gap-[10px] border-b border-[rgba(0,0,0,0.1)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.1)]">
          <h1 className="text-[20px] font-bold text-center  pt-2">
            Thông tin đơn hàng
          </h1>
        </div>
        <div className="bg-[#F5F6FA]">
          <p className="h-[20px] pt-[30px] left-[154px] text-center pb-[30px] text-[#6E707E]">
            Đơn hàng này đang trống
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center ml-3 mr-3">
              <p className="text-[16px]">Phương thức thanh toán</p>
              <p className="flex items-center">
                <span className="text-[#E40A1C]">Xem tất cả</span>
                <img
                  src="/img/expand_more.png"
                  alt="Mũi tên"
                  className="w-[20px] h-[20px]"
                />
              </p>
            </div>
            <div className="ml-3 mr-3">
              <label className="flex items-center justify-between w-full p-4 border border-[#D1D5DB] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)] rounded-lg cursor-pointer">
                <div className="flex items-center gap-10 ">
                  <div className="w-[77px] flex justify-center">
                    <img
                      src="/img/ZaloPay_Logo 1.png"
                      alt="ZaloPay"
                      className="w-auto h-[20px]"
                    />
                  </div>
                  <span className="text-gray-800 text-[14px]">Ví ZaloPay</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 accent-blue-500 "
                />
              </label>
              <label className="flex items-center justify-between w-full p-4 border border-[#D1D5DB] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)] rounded-lg cursor-pointer mt-3">
                <div className="flex items-center gap-10">
                  <div className="w-[77px] flex justify-center">
                    <img
                      src="/img/home.png"
                      alt="Thẻ ATM"
                      className="w-auto h-[22.38px]"
                    />
                  </div>
                  <span className="text-gray-800 text-[14px]">Thẻ ATM</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 accent-blue-500"
                />
              </label>
            </div>
            <div className="mt-9 ml-3 mr-3 pb-10">
              <p className="text-[16px]">Chi tiết thanh toán</p>
              <div className="w-full flex h-[60px] items-center justify-between px-4 py-3 border border-[#D1D5DB] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)] rounded-lg bg-white">
                <span className="text-gray-500 text-[14px]">Tổng tiền:</span>
                <span className="text-black font-roboto  font-semibold text-[16px]">
                  0 VND
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-[#FFFFFF] rounded-b-[16px] shadow-md">
          <div className="flex h-[37px] justify-between items-center mb-2 border-b-1 border-b-[#D1D5DB]">
            <h2 className="text-[20px] font-roboto  font-semibold">
              Tổng thanh toán
            </h2>
            <span className="text-red-500 font-roboto  font-semibold text-[20px]">
              0 VND
            </span>
          </div>
          <p className="text-gray-500 text-[12px] mb-4">
            Bằng việc nhấn nút <strong>"Thanh toán ngay"</strong>, bạn đồng ý
            rằng giao dịch này không hoàn, không hủy và tuân thủ với{" "}
            <a href="#" className="text-blue-500 font-roboto  font-semibold">
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="#" className="text-blue-500 font-roboto font-semibold">
              Chính sách bảo mật
            </a>
            của InPlay.vn
          </p>
          <button
            className="w-full h-[50px] py-4  bg-[#D1D5DB80] rounded-lg cursor-not-allowed"
            disabled
          >
            <p className="text-[#6E707E] font-roboto font-semibold text-[20px] leading-[20px] tracking-normal ">
              Thanh toán ngay
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutTT;

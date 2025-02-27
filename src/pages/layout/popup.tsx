import { Modal, Button } from "antd";

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderPopup = ({ isOpen, onClose }: OrderPopupProps) => {
  return (
    <Modal
      title={<div className="text-center w-full font-bold">Chi tiết gói</div>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <div className="flex items-center gap-3">
        <img
          src="/img/img.jpg"
          alt="Gói nạp"
          className="w-[120px] h-[90px] object-cover"
        />
        <p className="text-blue-600 font-bold pt-3 text-[16px]">
          Gói 100.000 VND
        </p>
      </div>
      <div className="mt-4 border-t pt-4 flex flex-row justify-between">
        <p className="font-semibold text-[14px]">Số lượng</p>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 border rounded border-none text-[#7E7E7E] bg-gray-200 text-[11px]">
            x1
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="mt-4">
          <p className="text-[12px]">
            Thành tiền: <br />
            <span className="text-red-500 font-bold text-[14px]">
              {" "}
              100.000 VND
            </span>
          </p>
        </div>
        <div className="mt-5 flex justify-end">
          <Button
            type="primary"
            className="bg-blue-500 text-[12px] h-[34px]"
            onClick={onClose}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderPopup;

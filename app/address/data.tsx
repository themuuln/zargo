import { FaEnvelope, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';

export const data = [
	{
		label: '收件人 (Хүлээн авагч)',
		value: '烸嵪 (Өөрийн утасны дугаар)',
		icon: <FaUser />,
	},
	{
		label: '电话 (Утас)',
		value: '15847901990',
		icon: <FaPhoneAlt />,
	},
	{
		label: '所在地区 (Бүс нутаг)',
		value: '内蒙古自治区 锡林郭勒盟 二连浩特市社区建设管理局',
		icon: <FaMapMarkerAlt />,
	},
	{
		label: '街道地址 (Хаяг)',
		value: '浩特汇通物流园区E03号 (Өөрийн утасны дугаар)',
		icon: <FaHome />,
	},
	{
		label: '邮编 (Зип код)',
		value: '011100',
		icon: <FaEnvelope />,
	},
] as const;

import Axios from "axios";

export const chatList = async () => {
  try {
    const {
      data,
    } = await Axios.get("http://test.vanillabridge.com/test_data");
    return JSON.parse(data);
  } catch (e) {
    throw new Error("서버에서 데이터를 가져오는데 실패했습니다.");
  }
};
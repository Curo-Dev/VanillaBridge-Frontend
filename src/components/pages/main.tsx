import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  MainTemplate,
} from "src/components/templates"
// import { chatList } from "src/modules";

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

export const MainPage: FC = () => {
  let data = [
    {
       id: 101,
       user_id: 2,
       user_name: "주선자",
       photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
       created_at: "2020-12-10 13:00:00",
       msg: {
          mtype: "text",
          content: "안녕하세요. \\n주선자입니다. 만나서 반갑습니다~"
       }
    },
    {
      id: 5,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-11 14:10:05",
      msg: {
         mtype: "text",
         content: "저는 잘 웃는 사람이 좋아요~~"
      }
   },
   {
      id: 6,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-11 14:10:06",
      msg: {
         mtype: "text",
         content: "재미있고 유머러스한 사람이면 더 좋겠네요\\n외모는 많이 안보고 키는 저보다만 크면 됩니당 ㅎㅎ"
      }
   },
   {
      id: 2,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-10 13:00:01",
      msg: {
         mtype: "text",
         content: "안녕하세요."
      }
   },
   {
      id: 8,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-11 14:13:15",
      msg: {
         mtype: "text",
         content: "넹 맞습니다"
      }
   },
   {
      id: 107,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-11 14:13:15",
      msg: {
         mtype: "text",
         content: "프로필에 키가 170이라고 적어주셨는데 맞죠~?"
      }
   },
   {
      id: 109,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-13 22:10:15",
      msg: {
         mtype: "text",
         content: "소개녀님~~~ 소개해주고 싶은 분이 생겼습니다!! 키도 크시고 훈훈하게 생겼는데 능력도 좋은 분이에요\\n\\n제가 본 남성회원 중 정말 잘 생긴 분인거 같아요\\n운동도 열심히 하셔서 몸도 좋으시고 나이도 딱 비슷하네요\\n이 분이 소개녀님이 정말 맘에 든다고 꼭 소개해달라고 하셨습니다!!!"
      }
   },
   {
      id: 110,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-13 22:10:15",
      msg: {
         mtype: "text",
         content: "이 분 만나보는거 어떠신가요~~~~"
      }
   },
   {
      id: 104,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-11 09:00:00",
      msg: {
         mtype: "text",
         content: "이상형에 최대한 맞춰서 소개해드릴게요~~"
      }
   },
   {
      id: 16,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 08:03:15",
      msg: {
         mtype: "text",
         content: "만나기가 힘들거 같네요ㅠㅠㅠㅠㅠㅠㅠ"
      }
   },
   {
      id: 103,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-11 09:00:00",
      msg: {
         mtype: "text",
         content: "원하시는 스타일 있으신가요?"
      }
   },
   {
      id: 17,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 09:05:15",
      msg: {
         mtype: "text",
         content: "정말 좋은 분 같은데 아쉬워요....."
      }
   },
   {
      id: 18,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 10:01:15",
      msg: {
         mtype: "text",
         content: "다른 분은 없나요?"
      }
   },
   {
      id: 19,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 10:02:15",
      msg: {
         mtype: "text",
         content: "열심히 찾아주셨는데 죄송합니당ㅠㅠㅠㅠㅠ"
      }
   },
   {
      id: 126,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 00:04:05",
      msg: {
         mtype: "photo"
      }
   },
   {
      id: 123,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-16 23:14:25",
      msg: {
         mtype:"photo"
      }
   },
   {
      id: 124,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 00:04:05",
      msg: {
         mtype: "text",
         content: "이 사진도 있습니다!!"
      }
   },
   {
      id: 125,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 00:04:05",
      msg: {
         mtype:"photo"
      }    
   },
   {
      id: 111,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-13 22:10:15",
      msg: {
         mtype:"photo"
      }
   },
   {
      id: 137,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 13:28:05",
      msg: {
         mtype: "text",
         content: "혹시 직접 물어보기 그런 것들은 저 통해서 물어봐주세요!!"
      }
   },
   {
      id: 147,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-22 20:29:05",
      msg: {
         mtype: "text",
         content: "혹시 좋아하는 음식이나 싫어하는 음식 있으면 저한테 살짝 알려주세요\\n남성분께 전달해드릴게요"
      }
   },
   {
      id: 121,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-16 23:14:15",
      msg: {
         mtype: "text",
         content: "너무 늦은 시간에 보내서 죄송한데 진짜 괜찮은 분이라서요!!!"
      }
   },
   {
      id: 138,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-21 13:28:05",
      msg: {
         mtype: "text",
         content: "안녕하세요~ 혹시 만나 보셨나요~~~"
      }
   },
   {
      id: 112,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-13 22:10:15",
      msg: {
         mtype:"photo"
      }
   },
   {
      id: 13,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 08:00:03",
      msg: {
         mtype: "text",
         content: "와 진짜 잘생기셨네요!!"
      }
   },
   {
      id: 146,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-22 20:29:05",
      msg: {
         mtype: "text",
         content: "남성분도 엄청 기대 중이시네요~~"
      }
   },
   {
      id: 48,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-23 19:09:14",
      msg: {
         mtype: "text",
         content: "저 다 잘먹어서요. 괜찮습니당 ㅎㅎㅎ"
      }
   },
   {
      id: 15,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 08:00:04",
      msg: {
         mtype: "text",
         content: "근데 사는 곳이 너무 멀어서 ㅠㅠㅠㅠㅠ"
      }
   },
   {
      id: 27,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-18 00:20:02",
      msg: {
         mtype: "text",
         content: "우와~~ 맘에 듭니다!!! 저분도 저 좋다고 하신거 맞아요~~~?"
      }
   },
   {
      id: 139,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-21 13:29:05",
      msg: {
         mtype: "text",
         content: "어떻게 되고 있나 궁금해서요~~~~"
      }
   },
   {
      id: 130,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 10:24:05",
      msg: {
         mtype: "text",
         content: "남성분 답 왔는데 정말 좋으시데요!!"
      }
   },
   {
      id: 40,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-21 18:08:04",
      msg: {
         mtype: "text",
         content: "안녕하세요!! 크리스마스 이브날 보기로 했어요~"
      }
   },
   {
      id: 131,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 10:24:05",
      msg: {
         mtype: "text",
         content: "근데 이 분이 아직 학생인데 괜찮은지 여쭤봐달라네요."
      }
   },
   {
      id: 28,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-18 00:20:03",
      msg: {
         mtype: "text",
         content: "저 동안이라서 누나처럼 안보일거라고 어필좀 해주세요~~~~"
      }
   },
   {
      id: 129,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 00:24:05",
      msg: {
         mtype: "text",
         content: "넵!! 근데 주무시는지 답이 없으시네요. 내일 알려드릴게요!!"
      }
   },
   {
      id: 14,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-14 08:00:03",
      msg: {
         mtype: "text",
         content: "이 분도 저 좋다고 하셨나요?"
      }
   },
   {
      id: 132,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 10:24:05",
      msg: {
         mtype: "text",
         content: "학생도 괜찮으신거죠~???"
      }
   },
   {
      id: 33,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-17 12:30:03",
      msg: {
         mtype: "text",
         content: "당연 괜찮죠!!"
      }
   },
   {
      id: 34,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-17 12:30:04",
      msg: {
         mtype: "text",
         content: "전 좋습니당 ㅎㅎㅎㅎㅎ"
      }
   },
   {
      id: 135,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 13:24:05",
      msg: {
         mtype: "text",
         content: "넵 그럼 연락처 전해드릴게요!!!!"
      }
   },
   {
      id: 136,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-17 13:24:05",
      msg: {
         mtype: "text",
         content: "좋은 인연 만드시길 바랍니다!!"
      }
   },
   {
      id: 41,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-21 18:09:04",
      msg: {
         mtype: "text",
         content: "아직 카톡 대화만 하고 있는데 진짜 재밌고 좋은 분 같아요!!"
      }
   },
   {
      id: 42,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-21 18:09:04",
      msg: {
         mtype: "text",
         content: "덕분에 해피 크리스마스 보낼 수 있겠네요!! 감사합니당~~ ㅎㅎㅎ"
      }
   },
   {
      id: 120,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-15 11:14:15",
      msg: {
         mtype: "text",
         content: "괜찮습니다!! 가까운 분으로 찾아볼게요!!"
      }
   },
   {
      id: 122,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-16 23:14:15",
      msg: {
         mtype: "text",
         content: "같은 구에 사시는 분이고!\\n키도 소개녀님보다는 크세요!!\\n외모도 진짜 훈훈하신 분이고\\n나이는 연하세요!!\\n남자분은 연상도 괜찮다고 하셧습니다!\\n이 분은 어떠신가요????"
      }
   },
   {
      id: 43,
      user_id: 1,
      user_name: "소개녀",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
      created_at: "2020-12-21 18:09:14",
      msg: {
         mtype: "text",
         content: "만나면 후기 알려드릴게요!!"
      }
   },
   {
      id: 144,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-22 09:29:05",
      msg: {
         mtype: "text",
         content: "그러시군요~~~~"
      }
   },
   {
      id: 145,
      user_id: 2,
      user_name: "주선자",
      photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
      created_at: "2020-12-22 09:29:05",
      msg: {
         mtype: "text",
         content: "잘 되셨으면 좋겟네요 ㅎㅎㅎㅎ"
      }
   }
 ];

  data.sort((x, y) => {
    return x.id < y.id ? -1 : x.id > y.id ? 1 : 0;
  });

  data.sort((x, y) => {
    const xd: any = new Date(x.created_at);
    const yd: any = new Date(y.created_at);
    return xd - yd;
  }); // 서버측에서 처리하면 이 부분은 없애도 될 거 같다....
  

  return (
    <MainBlock>
      <MainTemplate title={"test"} chats={data}/>
    </MainBlock>
  );
};
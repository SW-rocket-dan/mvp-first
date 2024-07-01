// pages/payment.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/Footer';
import logoCardcapture from '../../public/logo-cardcapture.png';
import kakaopayButton from '../../public/payment_icon_yellow_large.png';

declare global {
  interface Window {
    PortOne: any;
  }
}

// UUID 생성 함수
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const PaymentPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.portone.io/v2/browser-sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.PortOne) {
        console.log('PortOne SDK loaded');
      } else {
        console.error('PortOne SDK failed to load');
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

 const requestPayment = async (data: any) => {
    try {
      const response = await window.PortOne.requestPayment(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePurchase = (basePaymentData: any) => {
    const paymentData = {
      ...basePaymentData,
      paymentId: generateUUID(), // 고유한 paymentId 생성
    };
    requestPayment(paymentData);
  };

    const basePaymentOtherTossSingle = {
      storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
      channelKey: 'channel-key-8ca284e5-b192-43d3-9668-2ae24d89f0c5',
      orderName: '다른 사람이 만든 템플릿 10장 구매하기(토스페이먼츠 단건 결제)',
      totalAmount: 2000,
      currency: 'CURRENCY_KRW',
      payMethod: 'CARD',
    };

    const basePaymentAiTossSingle = {
      storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
      channelKey: 'channel-key-8ca284e5-b192-43d3-9668-2ae24d89f0c5',
      orderName: 'AI 포스터 생성 10장 이용권(토스페이먼츠 단건 결제)',
      totalAmount: 5000,
      currency: 'CURRENCY_KRW',
      payMethod: 'CARD',
    };

  const basePaymentCreditTossSubscribe = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-e93289b1-6d3c-4d19-9a9f-bc358798ebd9',
    orderName: 'Credit 1개월(토스페이먼츠 정기 결제)',
    totalAmount: 7900,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
  };


  const basePaymentOtherKakaopaySingle = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-69320b20-f653-4f78-a57e-f681c30a7b1f',
    pg: 'kakaopay.TC0ONETIME',
    orderName: '다른 사람이 만든 템플릿 10장 구매하기(카카오페이 단건 결제)',
    totalAmount: 2000,
    currency: 'CURRENCY_KRW',
    payMethod: 'EASY_PAY',
  };

  const basePaymentAiKakaopaySingle = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-69320b20-f653-4f78-a57e-f681c30a7b1f',
    pg: 'kakaopay.TC0ONETIME',
    orderName: 'AI 포스터 생성 10장 이용권(카카오페이 단건 결제)',
    totalAmount: 5000,
    currency: 'CURRENCY_KRW',
    payMethod: 'EASY_PAY',
  };

  const basePaymentCreditKakaopaySubscribe = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-ee5b1404-3c48-4e78-b9fc-301f9be22b5f',
    pg: 'kakaopay.TCSUBSCRIP',
    orderName: 'Credit 1개월(카카오페이 정기 결제)',
    totalAmount: 7900,
    currency: 'CURRENCY_KRW',
    payMethod: 'EASY_PAY',
  };


  return (
    <>
      <div className="flex justify-center border-2 items-center h-[100px] relative w-full" style={{ marginTop: '20px' }}>
        <Link to="/" className="text-center">
          <img src={logoCardcapture} alt="Logo" width={100} height={50} />
        </Link>
      </div>
      <div className='flex flex-col p-7'>
        <div className='text-xl mb-5 font-bold'>결제 플랜</div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg'>이용권 단건 결제</div>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
              <div>다른 사람이 만든 템플릿 10장 구매하기</div>
              <div>₩ 2,000원 / 10장</div>
              <div>
                - 다른 사람이 만든 포스터 10장을 구매할 수 있는 가격이에요. 포스터는 1장씩 나눠 다운로드 받을 수 있어요.<br />
                - 유효기간: 구매일로부터 365일
              </div>
              <button onClick={() => handlePurchase(basePaymentOtherTossSingle)} className='p-3 bg-gray-200'>토스 페이먼츠로 단건 결제하기</button>
              <img src={kakaopayButton} width={100} onClick={() => handlePurchase(basePaymentOtherKakaopaySingle)} className='cursor-pointer' />

            </div>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
              <div>AI 포스터 생성 10장 이용권</div>
              <div>₩ 5,000원 / 10장</div>
              <div>
                - AI로 포스터 완성본을 10번 생성할 수 있는 가격이에요. AI 포스터는 1장씩 생성할 수 있어요.<br />
                - 유효기간: 구매일로부터 365일
              </div>
              <button onClick={() => handlePurchase(basePaymentAiTossSingle)} className='p-3 bg-gray-200'>토스 페이먼츠로 단건 결제하기</button>
              <img src={kakaopayButton} width={100} onClick={() => handlePurchase(basePaymentAiKakaopaySingle)} className='cursor-pointer' />
            </div>
          </div>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md'>
              <p className='font-bold text-lg'>다른 사람이 만든 포스터 구매란?</p>
              - 다른 사람이 만들어 놓은 포스터 이미지를 상업적으로 이용할 수 있어요 <br />
              - 다른 사람이 만든 포스터는 재판매가 불가능해요<br />
            </div>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md'>
              <p className='font-bold text-lg'>AI가 만드는 포스터 완성본이란?</p>
              v 프롬프트만 입력하면 AI가 포스터 완성본을 생성해요<br />
              v AI가 만든 포스터를 에디터로 수정할 수 있어요 <br />
              v AI가 주제에 맞는 고퀄리티 일러스트 이미지를 생성해요 <br />
              v 포스터 저작권 획득 및 상업적 사용 가능 <br />
              v 포스터 판매 가능 <br />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 mt-10'>
          <div className='text-lg'>정기 구독</div>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
              <div>디지털 포스터 템플릿 Credit 구독 1개월</div>
              <div>₩ 7,900원 / 1개월(Credit 900개)</div>
              <div>
                - 다른 사람이 만든 포스터 및 AI 포스터 생성을 자유롭게 Credit으로 이용할 수 있어요.<br />
                - 타인의 포스터 구매 = Credit 10<br />
                - AI 포스터 생성 = Credit 25<br />
                - 단건 결제 대비 약 56% 할인!<br />
              </div>
              <button onClick={() => handlePurchase(basePaymentCreditTossSubscribe)} className='p-3 bg-gray-200'>토스 페이먼츠로 정기 결제하기</button>
              <img src={kakaopayButton} width={100} onClick={() => handlePurchase(basePaymentCreditKakaopaySubscribe)} className='cursor-pointer' />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
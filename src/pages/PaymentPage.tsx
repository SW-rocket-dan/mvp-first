// pages/payment.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/Footer';
import logoCardcapture from '../../public/logo-cardcapture.png';

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
  const [message, setMessage] = useState<string | null>(null);

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
      const response = await window.PortOne.requestPayment({
        ...data,
        redirectUrl: 'http://your-redirect-url.com' // 리디렉션 URL 추가
      });
      console.log(response);
      if (response && response.__portOneErrorType) {
        setMessage(`Error: ${response.code} - ${response.message || 'No additional message'}`);
      } else {
        setMessage(`Payment successful!: ${response.message}`);
      }
    } catch (error) {
      console.error('Payment request failed:', error);
      setMessage(`Payment request failed: ${error.message || 'Unknown error'}`);
    }
  };

  const handlePurchase = (basePaymentData: any) => {
    const paymentData = {
      ...basePaymentData,
      paymentId: generateUUID(), // 고유한 paymentId 생성
    };
    requestPayment(paymentData);
  };

  const basePaymentData1 = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-8ca284e5-b192-43d3-9668-2ae24d89f0c5',
    orderName: '다른 사람이 만든 템플릿 10장 구매하기',
    totalAmount: 2000,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
  };

  const basePaymentData2 = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-8ca284e5-b192-43d3-9668-2ae24d89f0c5',
    orderName: 'AI 포스터 생성 10장 이용권',
    totalAmount: 5000,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
  };

  const basePaymentData3 = {
    storeId: 'store-5782c1b2-9e1e-4016-a185-f9b19987ede0',
    channelKey: 'channel-key-e93289b1-6d3c-4d19-9a9f-bc358798ebd9',
    orderName: 'Credit 1개월',
    totalAmount: 7900,
    currency: 'CURRENCY_KRW',
    payMethod: 'CARD',
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
              <div>₩ 2000원 / 10장</div>
              <div>
                - 다른 사람이 만든 포스터 10장을 구매할 수 있는 가격이에요. 포스터는 1장씩 나눠 다운로드 받을 수 있어요.<br />
                - 유효기간: 구매일로부터 365일
              </div>
              <button onClick={() => handlePurchase(basePaymentData1)} className='p-3 bg-gray-200'>토스 페이먼츠로 단건 결제하기</button>
            </div>
            <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
              <div>AI 포스터 생성 10장 이용권</div>
              <div>₩ 5000원 / 10장</div>
              <div>
                - AI로 포스터 완성본을 10번 생성할 수 있는 가격이에요. AI 포스터는 1장씩 생성할 수 있어요.<br />
                - 유효기간: 구매일로부터 365일
              </div>
              <button onClick={() => handlePurchase(basePaymentData2)} className='p-3 bg-gray-200'>토스 페이먼츠로 단건 결제하기</button>
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
              <div>Credit 1개월</div>
              <div>₩ 7,900원/1개월(Credit 900개)</div>
              <div>
                - 다른 사람이 만든 포스터 및 AI 포스터 생성을 자유롭게 Credit으로 이용할 수 있어요.<br />
                - 타인의 포스터 구매 = Credit 10<br />
                - AI 포스터 생성 = Credit 25<br />
                - 단건 결제 대비 약 56% 할인!<br />
              </div>
              <button onClick={() => handlePurchase(basePaymentData3)} className='p-3 bg-gray-200'>토스 페이먼츠로 정기 결제하기</button>
            </div>
          </div>
        </div>

      </div>
      {message && (
        <div className='flex flex-col gap-5 mt-10'>
          <h2 className='text-lg text-red-600'>Notification:</h2>
          <pre className='bg-red-100 p-5 border'>{message}</pre>
        </div>
      )}
      <Footer />
    </>
  );
}

export default PaymentPage;
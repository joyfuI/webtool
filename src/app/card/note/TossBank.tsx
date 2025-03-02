import Link from '@mui/material/Link';

import Modal from '@/components/Modal';
import Table from '@/components/Table';

import { useModal } from '@/hooks';

const TossBank = () => {
  const [open, , setOpen] = useModal();

  return (
    <>
      <span>
        <Link component="button" type="button" onClick={() => setOpen(true)}>
          오프라인 캐시백 영역
        </Link>{' '}
        당 일 1회/월 10회 3천원~만원 100원, 만원 이상 500원 캐시백 / 전월실적 X
      </span>

      <Modal open={open} title="대상 영역" onClose={() => setOpen(false)}>
        <Table
          columns={[
            { field: 'area', headerName: '영역' },
            { field: 'merchant', headerName: '브랜드' },
          ]}
          rows={[
            { area: '편의점', merchant: '전국 모든 CU, GS25 편의점' },
            {
              area: '대중교통',
              merchant:
                '국내 시내버스, 마을버스, 광역버스, 지하철, 공항철도, 공항버스 (최소 결제 제한 X) / 시외버스, 고속버스, 택시 제외',
            },
            {
              area: '음식 & 음료',
              merchant:
                '스타벅스, 투썸플레이스, 메가MGC커피, 컴포즈커피, 빽다방, 맥도날드, 버거킹, 롯데리아, 샐러디',
            },
            {
              area: '마트 & 백화점',
              merchant:
                '다이소, 이마트, GS더프레시, 롯데마트, 롯데백화점, 신세계백화점, 현대백화점',
            },
            { area: '서점', merchant: '교보문고, 영풍문고, 알라딘' },
            {
              area: '즉석사진',
              merchant:
                '포토이즘, 포토그레이, 모노맨션, 하루필름, 포토시그니처, 인생네컷, 돈룩업',
            },
            {
              area: '영화관',
              merchant:
                'CGV, 롯데시네마, 메가박스 (공식 홈페이지 및 앱 또는 현장 결제)',
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default TossBank;

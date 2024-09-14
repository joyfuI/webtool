import Link from '@mui/material/Link';

import Modal from '@/components/Modal';
import Table from '@/components/Table';

import { useModal } from '@/hooks';

const TossBank = () => {
  const [open, , setOpen] = useModal();

  return (
    <>
      <span>
        <Link
          component="span"
          onClick={() => setOpen(true)}
          sx={{ cursor: 'pointer' }}
        >
          대상 영역
        </Link>{' '}
        당 1일 1회 3천원~만원 100원, 만원 이상 500원 캐시백 / 전월실적: X
      </span>

      <Modal open={open} title="대상 영역" onClose={() => setOpen(false)}>
        <Table
          columns={[
            { field: 'area', headerName: '영역' },
            { field: 'merchant', headerName: '브랜드' },
          ]}
          rows={[
            {
              area: '대중교통',
              merchant:
                '국내 시내버스, 마을버스, 광역버스, 지하철, 공항철도, 공항버스 (최소 결제 제한 X) / 시외버스, 고속버스 제외',
            },
            {
              area: '택시',
              merchant: '택시 현장 일반 결제, 카카오택시, 타다, UT',
            },
            { area: '편의점', merchant: '전국 모든 GS25, CU 편의점' },
            {
              area: '영화관',
              merchant:
                'CGV, 롯데시네마, 메가박스 (직영 홈페이지 및 앱, 현장 결제)',
            },
            {
              area: '카페 & 디저트',
              merchant:
                '빽다방, 공차, 스타벅스, 이디야, 투썸플레이스, 커피빈, 폴바셋, 블루보틀, 할리스, 엔제리너스, 파스쿠찌, 탐앤탐스, 배스킨라빈스, 던킨도너츠, 노티드',
            },
            {
              area: '패스트푸드',
              merchant:
                '써브웨이, 파파이스, 맥도날드, 버거킹, 롯데리아, 맘스터치, 쉐이크쉑, 파이브가이즈, 다운타우너',
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default TossBank;

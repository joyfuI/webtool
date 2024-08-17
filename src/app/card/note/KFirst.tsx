import Link from '@mui/material/Link';

import Modal from '@/components/Modal';
import Table from '@/components/Table';

import { useModal } from '@/hooks';

const KFirst = () => {
  const [open, , setOpen] = useModal();

  return (
    <>
      <span>
        1% 할인 / 만원 이상{' '}
        <Link
          component="span"
          onClick={() => setOpen(true)}
          sx={{ cursor: 'pointer' }}
        >
          생활 편의 업종
        </Link>{' '}
        1.5% 할인 / 전월실적 X / 무이자할부 3개월
      </span>

      <Modal open={open} title="생활 편의 업종" onClose={() => setOpen(false)}>
        <Table
          columns={[
            { field: 'area', headerName: '업종' },
            { field: 'merchant', headerName: '대상 가맹점' },
          ]}
          rows={[
            { area: '음식점', merchant: '모든 음식점 업종' },
            { area: '편의점', merchant: 'CU, GS25, 세븐일레븐 등 모든 편의점' },
            {
              area: '커피',
              merchant:
                '스타벅스, 카페베네, 엔제리너스, 커피빈, 할리스커피, 탐앤탐스',
            },
            {
              area: '대형할인점',
              merchant:
                '롯데마트, 이마트, 홈플러스, 하나로클럽 등 모든 대형할인점(단, 온라인 제외)',
            },
            {
              area: '백화점',
              merchant:
                '신세계백화점, 롯데백화점, 현대백화점 등 모든 백화점(단, 온라인 제외)',
            },
            {
              area: '대중교통',
              merchant:
                '전국 버스/지하철 후불교통 이용금액(단, 공항리무진 및 공항버스, 고속버스, 시외버스는 제외) 할인 적용',
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default KFirst;

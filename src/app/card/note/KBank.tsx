import Link from '@mui/material/Link';

import Modal from '@/components/Modal';
import Table from '@/components/Table';

import { useModal } from '@/hooks';

const KBank = () => {
  const [open, , setOpen] = useModal();

  return (
    <>
      <span>
        5천원 이상{' '}
        <Link component="button" type="button" onClick={() => setOpen(true)}>
          대상 가맹점
        </Link>{' '}
        각 영역별 1일 1회 300원 캐시백 / 전월실적 X
      </span>

      <Modal open={open} title="대상 가맹점" onClose={() => setOpen(false)}>
        <Table
          columns={[
            { field: 'area', headerName: '영역' },
            { field: 'merchant', headerName: '대상 가맹점' },
          ]}
          rows={[
            {
              area: '편의 ∙ 생활',
              merchant:
                'GS25, CU, 세븐일레븐, 이마트24, 미니스톱, 올리브영, 다이소, 노브랜드',
            },
            {
              area: '커피 ∙ 음료',
              merchant:
                '스타벅스, 투썸플레이스, 메가커피, 이디야, 빽다방, 공차, 메머드커피',
            },
            {
              area: '패스트푸드',
              merchant:
                '맥도날드, 롯데리아, 버거킹, 서브웨이, KFC, 맘스터치, 쉐이크쉑',
            },
            {
              area: '베이커리 ∙ 디저트',
              merchant:
                '파리바게뜨, 던킨도너츠, 뚜레쥬르, 이삭토스트, 베스킨라빈스, 설빙',
            },
            {
              area: '패션',
              merchant: '지그재그, 무신사, 에이블리, 브랜디, SSF, W컨셉, ZARA',
            },
            { area: '영화', merchant: 'CGV, 롯데시네마, 메가박스' },
            { area: '도서', merchant: '교보문고, 영풍문고, 알라딘, Yes24' },
            { area: '택시', merchant: '카카오택시, 타다' },
            { area: 'OTT', merchant: '넷플릭스, 유튜브 프리미엄' },
            { area: '어학', merchant: 'YBM (TOEIC 등 어학시험)' },
          ]}
        />
      </Modal>
    </>
  );
};

export default KBank;

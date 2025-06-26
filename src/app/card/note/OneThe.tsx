import Link from '@mui/material/Link';

import Modal from '@/components/Modal';
import Table from '@/components/Table';
import useModal from '@/hooks/useModal';

const title = '서비스 영역';

const KBank = () => {
  const [open, , setOpen] = useModal();

  return (
    <>
      <span>
        매달{' '}
        <Link component="button" onClick={() => setOpen(true)} type="button">
          {title}
        </Link>{' '}
        변경 가능 / 전월실적 X
      </span>

      <Modal onClose={() => setOpen(false)} open={open} title={title}>
        <Table
          columns={[
            { field: 'area', headerName: '서비스 영역' },
            { field: 'merchant', headerName: '가맹점 기준' },
            { field: 'note', headerName: '유의사항' },
          ]}
          rows={[
            {
              area: '음식점 Day',
              merchant:
                '음식업종(06:00부터 17:00이전): 한식, 중식, 일식, 서양식전문점, 패스트푸드점, 간이음식점, 치킨전문점, 식음료(기타), 기타음식점, 뷔페·출장연회',
              note: '하나카드 가맹점 업종 기준으로 서비스가 제공됩니다. 지정된 시간에 승인된 오프라인 결제건에 오프라인 결제건에 한하여 서비스가 제공되며 배달 앱이나 식당 예약앱 등을 통한 주문 결제 및 미리 결제하는 방식은 서비스에서 제외됩니다.',
            },
            {
              area: '패스트푸드',
              merchant:
                '롯데리아, 맥도날드, 버거킹, KFC, 쉑쉑버거, 써브웨이, 맘스터치',
              note: '오프라인 결제건에 한하여 서비스가 제공되며, 대형시설물 입점점포 및 임대매장은 서비스에서 제외됩니다.',
            },
            {
              area: '편의점',
              merchant: 'CU, GS25, 세븐일레븐, 이마트24',
              note: '오프라인 결제건에 한하여 서비스가 제공되며, 대형시설물 입점점포 및 임대매장은 서비스에서 제외됩니다.',
            },
            {
              area: '뮤직',
              merchant: '멜론, 지니, FLO, 스포티파이',
              note: '월 정기결제건만 서비스가 제공되며 포인트, 캐시, 머니충전, 컨텐츠 개별 결제, 간편결제건 및 앱스토어를 통한 결제건(인앱 결제)은 서비스가 제공되지 않습니다.',
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default KBank;

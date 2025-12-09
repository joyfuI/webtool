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
            { field: 'rate', headerName: '적립률' },
            { field: 'merchant', headerName: '가맹점 기준' },
            { field: 'note', headerName: '유의사항' },
          ]}
          rows={[
            {
              area: '전가맹점',
              rate: '0.1%',
              merchant: '국내·외 모든 결제 시',
              note: '',
            },
            {
              area: '간편결제',
              rate: '0.1%',
              merchant:
                '하나Pay 모든결제 / 삼성페이, 네이버페이, 카카오페이, SSG페이, 페이코, 쿠페이, SK pay 온라인 결제',
              note: '하나페이를 제외한 다른 간편결제 시 모바일 단말을 이용한 삼성페이 오프라인 결제, 네이버페이 오프라인 결제 등 오프라인 가맹점에서의 결제는 서비스에서 제외됩니다.',
            },
            {
              area: '음식점 DAY',
              rate: '2%',
              merchant:
                '음식업종(06:00부터~17:00이전)한식, 중식, 일식, 서양식전문점, 패스트푸드점, 간이음식점, 치킨전문점, 식음료(기타), 기타음식점, 뷔페·출장연회',
              note: '하나카드 가맹점 업종 기준으로 서비스가 제공됩니다. 지정된 시간에 승인된 오프라인 결제건에 한하여 서비스가 제공되며 배달 앱이나 식당 예약앱 등을 통한 주문 결제 및 미리 결제하는 방식은 서비스에서 제외됩니다.',
            },
            {
              area: '원큐페이 맛집',
              rate: '3%',
              merchant:
                "하나Pay 앱에서 제공하는 데이터 기반 맛집 서비스의 '원더카드 맛집' 가맹점",
              note: '오프라인 결제건에 한하여 서비스가 제공되며 배달 앱이나 식당 예약앱 등을 통한 주문 결제 및 미리 결제하는 방식은 서비스에서 제외됩니다.',
            },
            {
              area: '패스트푸드',
              rate: '4%',
              merchant:
                '롯데리아, 맥도날드, 버거킹, KFC, 쉑쉑버거, 써브웨이, 맘스터치',
              note: '오프라인 결제건에 한하여 서비스가 제공되며, 대형시설물 입점점포 및 임대매장은 서비스에서 제외됩니다.',
            },
            {
              area: '편의점',
              rate: '3%',
              merchant: 'CU, GS25, 세븐일레븐, 이마트24',
              note: '오프라인 결제건에 한하여 서비스가 제공되며, 대형시설물 입점점포 및 임대매장은 서비스에서 제외됩니다.',
            },
            {
              area: '병원/약국',
              rate: '2%',
              merchant:
                '종합병원, 일반병원, 한방병원, 요양병원, 치과, 내과, 신경정신과, 외과, 성형외과, 산부인과, 안과, 이비인후과, 피부과, 소아과, 정형외과, 한의원, 한양방, 요양·보육·복지시설, 기타의료업, 약국',
              note: '오프라인 결제건에 한하여 서비스가 제공되며 온라인 결제 및 앱 등을 통한 미리 결제하는 방식은 서비스에서 제외됩니다.',
            },
            {
              area: '세탁',
              rate: '4%',
              merchant: '세탁특공대, 크린토피아, 세탁업종',
              note: '세탁특공대는 공식 홈페이지(온라인/모바일 앱)를 통한 결제에 한하여 서비스가 제공됩니다. 크린토피아는 공식 홈페이지(온라인/모바일 앱)과 오프라인 결제에 한하여 서비스가 제공됩니다. 세탁업종은 오프라인 결제 건에 한하여 서비스가 제공됩니다',
            },
            {
              area: '뷰티&펫',
              rate: '4%',
              merchant: '동물병원업종, 미용업종',
              note: '오프라인 결제건에 한하여 서비스가 제공되며, 대형시설물 입점점포 및 임대매장과 네이버 예약 및 결제, 카카오 헤어 등 별도의 앱·웹으로 거래가 일어나는 결제는 서비스에서 제외됩니다.',
            },
            {
              area: '영상 스트리밍',
              rate: '5%',
              merchant: '넷플릭스, 디즈니플러스, Wavve, 유튜브프리미엄',
              note: '월 정기결제건만 서비스가 제공되며 포인트, 캐시, 머니충전, 컨텐츠 개별 결제, 간편결제건 및 앱스토어를 통한 결제건(인앱 결제)은 서비스가 제공되지 않습니다.',
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default KBank;

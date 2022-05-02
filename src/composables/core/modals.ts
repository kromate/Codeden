
import { useModal } from './modal'
import MakePayment from '@app/components/modals/payments/MakePayment.vue'


type AccountTypes = 'BuyCoins' | 'WithdrawCoins'
// type MenuTypes = 'RightSidebar' | 'Sidebar'
// type SessionTypes = 'CreateSession' | 'Ratings'
// type PaymentTypes = 'MakePayment'
// type ReportTypes = 'ReportUser' | 'ReportQuestion' | 'ReportAnswer'
// type QuestionTypes = 'AskQuestions'

const AccountModals = { BuyCoins } as Record<AccountTypes, any>


export const modal = useModal(ssrRef([] as string[]))
const accountModal = modal.register('Account', AccountModals)
const menuModal = modal.register('Menu', MenuModals)
const sessionModal = modal.register('Session', SessionModals)
const paymentModal = modal.register('Payment', PaymentModals)
const reportModal = modal.register('Report', ReportModals)
const questionModals = modal.register('Question', QuestionModals)

export const useAccountModal = () => accountModal
export const useMenuModal = () => menuModal
export const useSessionModal = () => sessionModal
export const usePaymentModal = () => paymentModal
export const useReportModal = () => reportModal
export const useQuestionsModal = () => questionModals

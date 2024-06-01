export interface IMeData {
  address: string;
  auto_withdrawal_status: number;
  birth_date: string;
  certificate_number: string;
  city: string;
  country: string;
  economic_code: string;
  email: string;
  email_verified: null | boolean | number;
  father_name: string;
  first_name: string;
  has_dns_service: boolean;
  has_success_payment: boolean;
  has_vcenter_service: boolean;
  id: number;
  identification_number: string;
  identification_type: number;
  is_iranian: number;
  is_term_accept: number;
  is_verified: number;
  last_name: string;
  legal: {
    address: string;
    agent_birth_date: string;
    agent_certificate_number: string;
    agent_city: string;
    agent_country: string;
    agent_father_name: string;
    agent_first_name: string;
    agent_identification_number: string;
    agent_identification_type: string;
    agent_is_iranian: string;
    agent_last_name: string;
    agent_mobile_number: string;
    agent_national_code: string;
    agent_position: string;
    agent_province: string;
    agent_sex: string;
    company_economic_code: null | string;
    company_name: string;
    company_registration_date: string;
    company_registration_number: string;
    company_type: string;
    identification_number: string;
  };
  mobile_number: string;
  national_code: string;
  nextcloud: string;
  old_user_id: number;
  postal_code: string;
  province: string;
  referrer_code: string;
  status: string;
  tel: string;
  type: null;
  user_accounting: number;
  user_contractual: null;
  user_type: string;
  username: string;
  wallet_balance: string;
}

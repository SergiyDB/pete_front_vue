// export type UserRole = 'admin' | 'teacher';
// export type UserType = 'company' | 'school' | 'tutor';

export interface User {
  id: number | null;
  full_name: string;
  email: string;
  password: string;
  // user_role?: UserRole;
  // user_type?: UserType;

  user_role?: string;
  user_type?: string;

  company_id? : number;
  school_id? : number;
  imageUrl? : string;
};

export interface Company {
  id: number;
  name: string;
  code: string;
};

export interface School {
  id: number;
  name: string;
  code: string;
};

export interface AverageIndicatorData {
  title: string;
  value: string | number;
  unit?: string;
  additionalText?: string;
  additionalValue?: string | number;
  additionalUnit?: string;
};

export interface SimpleIndicatorData {
  title: string;
  value: string | number;
  unit?: string;
};

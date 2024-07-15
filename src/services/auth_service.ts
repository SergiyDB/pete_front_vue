import {
  Users,
  Schools,
  Companies
} from 'src/mock/data';

// import type { UserRole, UserType } from 'src/interfaces/app_interfaces';

import { setUser } from 'src/app_state/app_state';

export default class AuthService {

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const user = Users.find(user => user.email === email && user.password === password);

      if (user) {
        resolve({ status: 'ok', user });
      } else {
        reject(new Error('Incorrect email or password'));
      }
    });
  }

  signUpSchool(fullName: string, email: string, password: string, schoolCode: string) {
    return new Promise((resolve, reject) => {
      const school = Schools.find(school => school.code === schoolCode);

      if (school) {
        const newUser = {
          id: Users.length + 1, // Generate new user ID
          full_name: fullName,
          email: email,
          password: password,
          user_role: 'teacher', // Set user role
          user_type: 'school', // Set user type
          school_id: school.id, // Assign company ID
          imageUrl: '' // Default avatar URL
        };

        setUser(newUser);
        resolve({ status: 'ok', user: newUser });

      } else {
        reject(new Error('Incorrect school code'));
      }
    });
  }

  signUpCompany(fullName: string, email: string, password: string, companyCode: string) {
    return new Promise((resolve, reject) => {
      const company = Companies.find(company => company.code === companyCode);

      if (company) {

        const newUser = {
          id: Users.length + 1, // Generate new user ID
          full_name: fullName,
          email: email,
          password: password,
          user_role: 'teacher', // Set user role
          user_type: 'company', // Set user type
          company_id: company.id, // Assign company ID
          imageUrl: '' // Default avatar URL
        };

        setUser(newUser);
        resolve({ status: 'ok', user: newUser });

      } else {
        reject(new Error('Incorrect company code'));
      }
    });
  }

  signUpTutor(fullName: string, email: string, password: string) {
    return new Promise((resolve) => {
      // const company = Companies.find(company => company.code === companyCode);

      // if (company) {

      const newUser = {
        id: Users.length + 1, // Generate new user ID
        full_name: fullName,
        email: email,
        password: password,
        user_role: 'teacher', // Set user role
        user_type: 'tutor', // Set user type
        company_id: 3, // Assign company ID
        imageUrl: '' // Default avatar URL
      };

      setUser(newUser);
      resolve({ status: 'ok', user: newUser });

      // } else {
        // reject(new Error('Incorrect company code'));
      // }
    });
  }

}
import { reactive, readonly } from 'vue';
import type { User } from 'src/interfaces/app_interfaces';


interface State {
  user: User;
  isUserLoggedIn: boolean;
};

const nullishUserState: User = {
  id: null,
  full_name: '',
  email: '',
  password: '',
};

const state: State = reactive<State>({
  user: { ...nullishUserState },
  isUserLoggedIn: false,
});


// Функция для получения начального состояния из localStorage
function initializeState(): void {
  const savedState = localStorage.getItem('appState');
  if (savedState) {
    const parsedState: State = JSON.parse(savedState);
    // Устанавливаем начальное состояние из сохраненного состояния
    state.user = parsedState.user;
    state.isUserLoggedIn = parsedState.isUserLoggedIn;
  } else {
    // Если сохраненное состояние отсутствует, устанавливаем начальное состояние по умолчанию
    state.user = { ...nullishUserState };
    state.isUserLoggedIn = false;
  }
}

initializeState();

function getUserId(): number | null {
  return state.user.id;
}

function getUserStatus(): boolean {
  return state.isUserLoggedIn;
}

function setUser(newUser: User): void {
  state.user = newUser;
  state.isUserLoggedIn = true;
  localStorage.setItem('appState', JSON.stringify(state));
}

function logoutUser(): void {
  state.user = { ...nullishUserState }; // Создаем копию объекта, чтобы не мутировать исходный объект
  state.isUserLoggedIn = false;
  localStorage.setItem('appState', JSON.stringify(state));
}

function getState(): Readonly<State> {
  return readonly(JSON.parse(JSON.stringify(state)));
}

export {
  getUserId,
  getUserStatus,
  getState,
  setUser,
  logoutUser,
  initializeState
};
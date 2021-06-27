import { User } from '../../../common/types/user';
import { useFetch } from '../../../common/utils/hooks/useFetch';

export const useUsers = () => useFetch<User[]>('users/');

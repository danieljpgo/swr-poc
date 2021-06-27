import { User } from '../../../common/types/user';
import { useFetch } from '../../../common/utils/hooks/useFetch';

export const useUserDetails = (id: string) => useFetch<User>(`users/${id}`);

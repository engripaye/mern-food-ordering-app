import UserProfileForm from "@/forms/user-profile-form/UserProfileForm.tsx";
import {useGetMyUser, useUpdateMyUser} from "@/api/MyUserApi.tsx";

const UserProfilePage = () => {

    const { currentUser, isLoading: isGetLoading } = useGetMyUser();
    const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
    return(
        <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    );
}

export default UserProfilePage;
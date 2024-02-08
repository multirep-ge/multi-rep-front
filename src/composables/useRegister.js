import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "/src/interceptors/axios/index";
import {useRegisterStore} from '/src/stores/registerStore.js';

const store = useRegisterStore();

export default function useRegister() {
    const router = useRouter();
    const error = ref();

    const step1Models = [
        {placeholder: "სახელი", model: "first_name"},
        {placeholder: "გვარი", model: "last_name"},
        {placeholder: "ტელეფონი", model: "phone_number"},
        {placeholder: "ელ. ფოსტა", model: "email"},
        {model: "is_teacher"},
    ];

    const step1Data = ref({
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        is_teacher: false,
    });

    const step2Models = [
        {placeholder: "ქალაქი", model: "city"},
        {placeholder: "პროფესია", model: "profession"},
    ];

    const step2Data = ref({
        city: null,
        profession: null,
    });

    const step3Models = [
        {placeholder: "პაროლი", model: "password", showToggle: true},
        {placeholder: "გაიმეორეთ", model: "password2", showToggle: true},
    ];

    const step3Data = ref({
        password: null,
        password2: null,
    });

    const step1 = () => {
        store.setData(step1Data.value)
        console.log(store.getData)
    }

    const step2 = () => {
        store.setData(step2Data.value)
        console.log(store.getData)
    }

    const step3 = () => {
        store.setData(step3Data.value)
        console.log(store.getData)
    }

    const register = async () => {
        step3()
        // axios.post('users/auth/register', store.getData()).then((res) => {
        //     router.push('/')
        // }).catch((err) => {
        //     console.log(err)
        //     error.value = 'შეამოწმეთ მონაცემები';
        // });
    };

    return {
        step1Models,
        step1Data,
        step1,
        step2Models,
        step2Data,
        step2,
        step3Models,
        step3Data,
        error,
        register,
    };
};
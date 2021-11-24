import axios from "axios";




const BANK_MODULE_URL = "http://localhost:9096/bank";

class BankService {

    getAllBanks(){
        console.log("BankService getAllBanks Service method");
        return axios.get(BANK_MODULE_URL +'/getAllBanks');
    }

    saveBankDetails(bank){
        console.log("BankService saveBankDetails Service method");
        return axios.post(BANK_MODULE_URL +'/savebanks', bank);
    }

    getBankById(bankId){
        console.log("BankService getBankById Service method");
        return axios.get(BANK_MODULE_URL + '/' +bankId);
    }

    updateBankDetails(bankId, bank){
        console.log("BankService updateBankDetails Service method");
        return axios.put(BANK_MODULE_URL +'/updatebankdetails/' + bankId , bank);
    }

    deleteBankDetails(bankId){
        console.log("BankService deleteBankDetails Service method");
        return axios.delete(BANK_MODULE_URL + '/' + bankId);
    }

    deleteAllBanksDetails(){
        console.log("BankService deleteAllBanksDetails Service method");
        return axios.delete(BANK_MODULE_URL +'/deleteallbanks');
    }
}

export default new BankService()
import swal from "sweetalert";

export function useFlash(){
  function  flash(titel='',message,level='success'){
        return swal(titel,message,level);
       }

       return {flash};
}
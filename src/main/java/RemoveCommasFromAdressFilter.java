public class RemoveCommasFromAdressFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String[]pom=input.split(",",-1);
        int k=17;
        StringBuilder rez=new StringBuilder();
        if(pom.length!=24){
        for (int i = 0; i < pom.length; i++) {
            if(i>6 && i<pom.length-k){
                StringBuilder p=new StringBuilder();
                for (int j = i; j < pom.length-k ; j++) {
                    p.append(pom[j]);
                }
                i=pom.length-k;
                rez.append(p.substring(1));
            }else{
                rez.append(pom[i]);
            }
            if(i!=pom.length-1){
                rez.append(",");
            }
        }return rez.toString();
        }else{
            return input;
        }

    }
}

public class RenameCafeCategoryFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String[]pom=input.split(",",-1);
        if(pom[4].toLowerCase().contains("cafe")||pom[4].toLowerCase().contains("coffee")){
            pom[4]="Cafe";
        }
        StringBuilder p=new StringBuilder();
        for (int i = 0; i < pom.length; i++) {
            p.append(pom[i]);
            if(i!= pom.length-1){
                p.append(",");
            }
        }

        return p.toString();
    }
}

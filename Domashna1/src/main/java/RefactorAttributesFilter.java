import java.util.Objects;

public class RefactorAttributesFilter implements Filter<String>{

    @Override
    public String execute(String input) {
        String[]pom=input.split(",",-1);
        String[]attr=pom[5].split("·");
        StringBuilder attrpom=new StringBuilder();
        for (int i = 0; i < attr.length; i++) {
           if(!Objects.equals(attr[i], "")){
               attrpom.append(attr[i].strip());
               if(i!=attr.length-1){
                   attrpom.append(';');
               }
           }
        }
        pom[5]=attrpom.toString();
        StringBuilder l=new StringBuilder();
        for (int i = 0; i < pom.length; i++) {
            l.append(pom[i]);
            if(i!= pom.length-1){
                l.append(",");
            }
        }
        return l.toString();

    }
}

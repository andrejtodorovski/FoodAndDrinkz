import java.util.Objects;

public class RemoveNullFilter implements Filter<String> {
    @Override
    public String execute(String input) {
        int k = 0;
        if(!input.equals("delete")){
        String []pom=input.split(",",-1);
        if(!Objects.equals(pom[pom.length - 3], "") &&
                !Objects.equals(pom[pom.length - 2], "") &&
                !Objects.equals(pom[8], "") &&
                !Objects.equals(pom[9], "") &&
                !Objects.equals(pom[10], "") &&
                !Objects.equals(pom[11], "") &&
                !Objects.equals(pom[12], "") &&
                !Objects.equals(pom[13], "") &&
                !Objects.equals(pom[14], "") &&
                !Objects.equals(pom[3], "") &&
                !Objects.equals(pom[4],"")){
            return input;
        }else{
            return "delete";
        }
        }
        return input;
    }
}

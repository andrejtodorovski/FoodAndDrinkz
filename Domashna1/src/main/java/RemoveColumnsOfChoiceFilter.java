import java.util.*;
import java.util.stream.Collectors;

public class RemoveColumnsOfChoiceFilter implements Filter<String>{
    List<Integer> columns;

    public RemoveColumnsOfChoiceFilter(int[] column) {
        columns = Arrays.stream(column).boxed().collect(Collectors.toList());
    }

    @Override
    public String execute(String input) {
        String[] pom= input.split(",",-1);
        StringBuilder pom1= new StringBuilder();
        if (Objects.equals(pom[0], "delete")){
            return pom[0];
        }
        for (int i = 0; i < pom.length ; i++) {
            if(!columns.contains(i)){
                if(i!=pom.length-1)
                    pom1.append(pom[i]).append(",");
                else
                    pom1.append(pom[i]);

            }
        }
        return pom1.toString();
    }
}

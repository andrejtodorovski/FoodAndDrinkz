import java.util.ArrayList;
import java.util.List;

public class Pipe <T>{
    private List<Filter<T>> list=new ArrayList<>();
    public void addFilter(Filter<T> filter){
        list.add(filter);
    }
    public T runFilter(T input){
        for(Filter<T> filter: list){
            input=filter.execute(input);
        }
        return input;
    }
}

package mk.foodanddrinkz.backend.exceptions;

public class PlaceDoesntExistException extends RuntimeException{
    public PlaceDoesntExistException() {
        super("Place doesn't exist");
    }
}

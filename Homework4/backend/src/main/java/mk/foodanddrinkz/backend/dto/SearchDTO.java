package mk.foodanddrinkz.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchDTO {
    String longitude;
    String latitude;
    Integer radius;
    String category;
}

package sda.schesa.todo.model;

import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import sda.schesa.todo.config.Auditable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Todo extends Auditable<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message = "Title cannot be null")
    private String title;

    private String details;

    @NotNull(message = "Competed cannot be null")
    private boolean completed;

//    @PastOrPresent
//    @CreatedDate
//    private Date created;
//
//    @LastModifiedDate
//    private long modifiedDate;
//
//    @CreatedBy
//    private String createdBy;
//
//    @LastModifiedBy
//    private String modifiedBy;
}

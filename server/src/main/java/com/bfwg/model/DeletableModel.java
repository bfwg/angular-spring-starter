package com.bfwg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.sql.Timestamp;

/**
 * Created by fan.jin on 2017-05-11.
 */
@MappedSuperclass
public abstract class DeletableModel extends DatedModel {

    @Column( name = "deleted_at" )
    private Timestamp deletedAt;

    public DeletableModel() {
    }

    @JsonIgnore
    public Timestamp getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt( Timestamp deletedAt ) {
        this.deletedAt = deletedAt;
    }

    @JsonIgnore
    public boolean isDeleted() {
        return getDeletedAt() != null;
    }

}

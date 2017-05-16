package com.bfwg.repository;

import com.bfwg.model.DeletableModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by fan.jin on 2017-05-11.
 */
@NoRepositoryBean
public interface DeletableModelRepository<T extends DeletableModel>
        extends PagingAndSortingRepository<T, Long> {

    @Override
    @Query( "select m from #{#entityName} m where m.deletedAt IS NULL Order By m.id" )
    public List<T> findAll();

}

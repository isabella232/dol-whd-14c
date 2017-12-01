﻿using DOL.WHD.Section14c.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DOL.WHD.Section14c.DataAccess.Repositories
{
    public class OrganizationRepository: IOrganizationRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private bool Disposed = false;

        public OrganizationRepository()
        {
            _dbContext = new ApplicationDbContext();
        }

        public IEnumerable<OrganizationMembership> Get()
        {
            return null;// _dbContext.OrganizationMemberships.AsQueryable();
        }

        public void Dispose()
        {
            Dispose(true);
            System.GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!Disposed && disposing)
            {
                _dbContext.Dispose();
            }
        }
    }
}